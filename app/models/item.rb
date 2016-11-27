class Item < ActiveRecord::Base
  belongs_to :drink

  validates :drink, presence: true

  extend Enumerize
  enumerize :cup_size, in: ['tall', 'grande', 'venti']

  def as_json
  	{
  		id: self.id,
  		drink_name: self.drink.name.humanize,
  		cup_size: self.cup_size.humanize
  	}
  end
end
