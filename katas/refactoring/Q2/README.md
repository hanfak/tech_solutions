Refactor and keep the test passing

```ruby
class Vehicule
  def self.fly(vehicule)
    case vehicule
    when Plane
      vehicule.move_plane
    when Helicopter
      vehicule.move_helicopter
    when Jetfigther
      vehicule.move_jetfighter
    end
  end
end


class Plane
  attr_reader :pilot, :distance

  def initialize(pilot)
    @pilot = pilot
    @distance = 0
  end

  def move_plane
    @distance = @distance + 2
  end
end

class Helicopter
  attr_reader :pilot, :distance

  def initialize(pilot)
    @pilot = pilot
    @distance = 0
  end

  def move_helicopter
    @distance = @distance + 4
  end
end

class Jetfigther
  attr_reader :pilot, :distance

  def initialize(pilot)
    @pilot = pilot
    @distance = 0
  end

  def move_jetfighter
    @distance = @distance + 6
  end
end
```

Tests

```ruby
RSpec.describe(Vehicule) do
  describe ".move" do
    let(:driver) { "John Doe" }

    subject { -> { Vehicule.move(vehicule) } }

    context "when vehicule is a plane" do
      let(:vehicule) { Plane.new(driver) }

      it { is_expected.to change(vehicule, :distance).by(2) }
    end

    context "when vehicule is a helicopter" do
      let(:vehicule) { Helicopter.new(driver) }

      it { is_expected.to change(vehicule, :distance).by(4) }
    end

    context "when vehicule is a jetfighter" do
      let(:vehicule) { Jetfigther.new(driver) }

      it { is_expected.to change(vehicule, :distance).by(6) }
    end
  end
end
```
