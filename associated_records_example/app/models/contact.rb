class Contact < ApplicationRecord
  has_many :phones
  has_many :gym_memberships
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
