import Base2DScene from "../base-2d-scene"

/**
 * Spiellogik für das Level02.
 */
export default class Level02 extends Base2DScene {
  constructor() {
    super({ key: "level-02" })
  }

  preload() {
    // Load the assets here
    this.load.tilemapTiledJSON(
      "map-level-02",
      "./assets/maps/map-level-02.json",
    )
  }

  create() {
    super.create("map-level-02")
  }
  update() {
    super.update()

    if (this.player.hp <= 0) {
      // Wenn Player 0 Leben hat, startet eine GameOver Szene
      this.scene.start("GameOverScene")
    }
  }
}
