class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    puts "PARAMS #{params[:contact]}"
    # using strong params for a new contact
    @contact = Contact.new(contact_params)
    if @contact.valid?
      @contact.save
      flash.now[:notice] = 'Contact is saved'
      render 'confirmed'
    else
      flash.now[:notice] = 'Contact not saved'
      redirect_to '/contacts/new'
    end
  end

  private

  # defining strong params for a contact
  def contact_params
    # require a contact key and permit the nested name, phone, email, and address keys in params
    params.require(:contact).permit(:name, :phone, :email, :address)
  end


end
