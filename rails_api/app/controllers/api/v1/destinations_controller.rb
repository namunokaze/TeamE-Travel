class Api::V1::DestinationsController < ApplicationController
  # GET /api/v1/destinations
  def index
    # Lấy tất cả destinations từ database
    @destinations = Destination.all 
    # Rails sẽ tự động tìm view trong app/views/api/v1/destinations/index.json.jbuilder
  end

  # GET /api/v1/destinations/:id
  def show
    # Tìm destination cụ thể bằng ID
    @destination = Destination.find(params[:id])
    # Rails sẽ tự động tìm view trong app/views/api/v1/destinations/show.json.jbuilder
  rescue ActiveRecord::RecordNotFound
    # Trả về lỗi 404 nếu không tìm thấy destination
    render json: { error: "Destination not found" }, status: :not_found
  end
end