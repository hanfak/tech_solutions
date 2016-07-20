class Courier
  def initialize(delivery, current_position_class)
    @delivery = delivery
    @current_position_klass = current_position_class
  end

  def current_info
    @current_position = @current_position_klass.new
    { pick_up_eta: pick_up_eta,
      delivery_eta: delivery_eta,
      current_latitude: current_position.latitude, current_longitude: current_position.longitude }
  end

  private
    attr_reader :current_position

    def pick_up_eta
      current_delivery.pick_up_eta(current_position.current_latitude, current_position.current_longitude)
    end

    def delivery_eta
      current_delivery.delivery_eta(current_position.current_latitude, current_position.current_longitude)
    end
end

class CurrentPosition
  def initialize
    # Make only one api call
    @current_position = Service::Google.get_position
  end

  def latitude
    current_position.latitude
  end

  def longitude
    current_position.longitude
  end

  private
    attr_reader :current_position
end
