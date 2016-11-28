class Order < ActiveRecord::Base
  belongs_to :item

  validates :item, presence: true

  paginates_per 5

  def self.total_sales
    Order.all.inject(0){|sum,x| sum + x.item.price }
  end

  def self.by_drink_type(drink_type)
    return nil unless ['tea', 'coffee'].include?(drink_type && drink_type.downcase)

    joins(:item, item: :drink).where('drinks.drink_type': drink_type.downcase)
  end

  def self.by_cup_size(size)
    return nil unless Item.cup_size.values.include?(size && size.downcase)

    joins(:item).where('items.cup_size': size.downcase)
  end

  def format_price price
    "$#{"%.2f" % (price / 100.0)}"
  end

  def as_json
    {
      id: self.id,
      name: self.item.drink.name.humanize,
      drink_type: self.item.drink.drink_type.humanize,
      cup_size: self.item.cup_size.humanize,
      price: format_price(self.item.price),
      order_time: self.created_at.strftime('%d %b %Y %H:%M:%S')
    }
  end
end
