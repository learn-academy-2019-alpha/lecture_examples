class PandasController < ApplicationController
  def index
    pandas = Panda.order(:id)
    render json: pandas
  end

  def create
    panda = Panda.create(panda_params)
    if panda.valid?
      render json: panda
    else
      render json: panda.errors, status: :unprocessable_entity
    end
  end

  def update
    panda = Panda.find(params[:id])
    if panda.update_attributes(panda_params)
      render json: panda
    else
      render json: panda.errors, status: :unprocessable_entity
    end
  end

  def destroy
    panda = Panda.find(params[:id])
    if panda
      panda.destroy
      render json: panda, status: :success
    else
      render json: panda, status: unprocessable_entity
    end
  end

  private
  def panda_params
    params.permit(:name, :age, :enjoys)
  end
end
