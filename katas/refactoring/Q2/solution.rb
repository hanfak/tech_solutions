class Vehicule
  def self.move(vehicule)
    vehicule.move
  end
end

module Transport
  attr_reader :driver, :distance

  def initialize(driver)
    @driver = driver
    @distance = 0
  end

  def move
    @distance += distance_travelled
  end

  private
    def distance_travelled
      0
    end
end

class Plane
  include Transport

  private
    def distance_travelled
      2
    end
end

class Helicopter
  include Transport

  private
    def distance_travelled
      4
    end
end

class Jetfigther
  include Transport

  private
    def distance_travelled
      6
    end
end
