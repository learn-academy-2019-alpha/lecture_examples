class GymMembershipsController < ApplicationController
  def index
    @memberships = GymMembership.all
  end

  def new
    contact = Contact.find(params[:contact_id])
    @membership = contact.gym_memberships.new
  end

  def create
    #need the contact id to create the membership for the contact
    @membership = GymMembership.new(membership_params)
    if @membership.save
      flash[:notice] = "Atta person"
      redirect_to contact_path(@membership.contact)
    else
      flash.now[:notice] = "Let's try that again."
      render action: :new
    end
  end

  def edit
    @membership = GymMembership.find params[:id]
  end

  private
  def membership_params
    params.require(:gym_membership).permit(:name, :contact_id)
  end
end
