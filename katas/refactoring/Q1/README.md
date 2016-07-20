The following mehtod takes ages to finish:
```ruby
Courier.new.current_info
```
The code is below

```ruby
class Courier
  def initialize(delivery)
    @delivery = delivery
  end

  def current_info
    pick_up_eta = current_delivery.pick_up_eta(current_position.latitude, current_position.longitude)
    delivery_eta = current_delivery.delivery_eta(current_position.latitude, current_position.longitude)
    { picking_eta: pick_up_eta, delivery_eta: delivery_eta, current_latitude: current_position.latitude, current_longitude: current_position.longitude }
  end

  private

  def current_position
    # Make a call to Google API which returns an object with 'latitude' and 'longitude'.
    Service::Google.get_position
  end
end
```

Improve it
