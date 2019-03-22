require 'rails_helper'

RSpec.describe Contact, type: :model do
  it "should validate email" do
    contact = Contact.new
    expect(contact.valid?).to be false
    expect(contact.errors.messages[:email].empty?).to_not be true
  end

  it "should expect email address to be valid" do
    contact = Contact.new(email: 'this is invalid')
    expect(contact.valid?).to be false
    expect(contact.errors.messages[:email].empty?).to_not be true
  end
end
