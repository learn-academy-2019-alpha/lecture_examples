require 'rspec'
require_relative 'car'

describe "Car" do
  it "has to be real" do
    expect{Car.new}.to_not raise_error
  end

  it "has a color" do
    a_car = Car.new
    expect(a_car.color).to be_a String
  end

  it "can change color" do
    a_car = Car.new
    a_car.color = "Red"
    expect(a_car.color).to eq "Red"
  end

  it "has a speed" do
    a_car = Car.new
    expect(a_car.speed).to be_a Numeric
  end

  it "starts at speed zero" do
     a_car = Car.new
     expect(a_car.speed).to be 0
   end
end
