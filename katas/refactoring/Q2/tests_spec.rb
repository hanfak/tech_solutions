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
