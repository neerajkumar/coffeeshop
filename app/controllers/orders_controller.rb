class OrdersController < ApplicationController

  def index
    @items = Item.includes(:drink).all
    @items = @items.map(&:as_json)
    drink_type = params[:type]
    cup_size = params[:size]

    @orders = Order.all
    @orders = @orders.by_drink_type(drink_type) if !drink_type.blank? && drink_type.downcase != 'all'
    @orders = @orders.by_cup_size(cup_size) if !cup_size.blank? && cup_size.downcase != 'all'

    @total_sales = @orders.inject(0){|sum,x| sum + x.item.price }
    @orders = @orders.order(created_at: :desc).page(params[:page]) if @orders

    @orders_hash = @orders.map(&:as_json) if @orders

    respond_to do |format|
      format.json do 
        render json: @orders_hash
      end
      format.html {}
    end
  end

  def create
    item_id = params[:id]

    respond_to do |format|
      format.json do
        if Order.new(item_id: item_id).save
          render json: {is_succ: true, msg: 'Order successfully created.'}, status: :created
        else
          render json: {is_succ: false, msg: 'Order fail created!'}, status: :bad_request
        end
      end
    end
  end

end
