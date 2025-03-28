import StaticObject from "../staticObject"

export default class Blueberry extends StaticObject {
  constructor(scene, x, y, properties) {
    super(scene, x, y, "pickups", "blueberry", properties)

    this.setOrigin(0, 0)
    this.setSize(32, 32)
    this.setOffset(0, 0)
  }
}
