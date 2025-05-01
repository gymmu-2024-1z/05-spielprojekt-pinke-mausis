import Flower from "../../gameObjects/pickups/flower"
import Base2DScene from "../base-2d-scene"

/**
 * Spiellogik für das Level03.
 */
export default class Level03 extends Base2DScene {
  constructor() {
    super({ key: "level-03" })
  }

  preload() {
    // Load the assets here
    this.load.tilemapTiledJSON(
      "map-level-03",
      "./assets/maps/map-level-03.json",
    )
  }

  create() {
    super.create("map-level-03")
  }

  pickUp(actor, item) {
    super.pickUp(actor, item)

    if (item instanceof Flower) {
      if (item.props.goToWorld === "level-02") {
        this.scene.start("level-02")
      }
    }
  }
  update() {
    super.update()

    if (this.player.hp <= 0) {
      // Wenn Player 0 Leben hat, startet eine GameOver Szene
      this.scene.start("GameOverScene")
    }
  }
}
