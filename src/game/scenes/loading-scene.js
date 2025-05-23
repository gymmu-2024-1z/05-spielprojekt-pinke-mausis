import Phaser from "phaser"
/**
 * Spiellogik für das Level02.
 */
export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super({ key: "loading" })
  }

  /**
   * Mit dieser Methode werden alle Resourcen geladen die vom Spiel gebraucht
   * werden. Hier werden alle Grafiken und auch Töne geladen. Diese können
   * danach im ganzen Spiel verwendet werden.
   */
  preload() {
    // Lade das Spritesheet für den Spieler.
    this.load.spritesheet("player", "./assets/player-2.png", {
      frameWidth: 32,
      frameHeight: 32,
    })
    this.load.spritesheet("mouse", "./assets/player.png", {
      frameWidth: 32,
      frameHeight: 32,
    })

    // Lade das Tileset für die Karten und die Objekte.
    this.load.image("tileset", "./assets/tileset.png")

    // Lade einen Atlas von einem Tileset. Damit können einzelne Kacheln aus
    // einem Tileset definiert werden.
    this.load.atlas(
      "pickups",
      "./assets/tileset.png",
      "./assets/atlas/atlas-pickups.json",
    )
    this.load.atlas(
      "doors",
      "./assets/tileset.png",
      "./assets/atlas/atlas-doors.json",
    )

    // Wir möchten auf das Drücken der Leertaste reagieren können, daher müssen
    // wir das hier registrieren.
    this.SPACE = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )
  }

  create() {
    this.createAnimations()

    this.add
      .text(320, 240, "Press SPACE to start the Game.")
      .setOrigin(0.5, 0.5)
  }

  update() {
    if (this.SPACE.isDown) {
      this.scene.start("level-01")
    }
  }

  createAnimations() {
    this.anims.create({
      key: "player_idle",
      frames: this.anims.generateFrameNumbers("player", {
        start: 1,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: "player_right",
      frames: this.anims.generateFrameNumbers("player", {
        start: 8,
        end: 10,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: "player_left",
      frames: this.anims.generateFrameNumbers("player", {
        start: 4,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: "player_up",
      frames: this.anims.generateFrameNumbers("player", {
        start: 12,
        end: 14,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: "player_down",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 2,
      }),
      frameRate: 10,
      repeat: -1,
    })
  }
  createAnimations() {
    this.anims.create({
      key: "mouse_idle",
      frames: this.anims.generateFrameNumbers("mouse", {
        start: 2,
        end: 2,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: "mouse_right", //mouse_up
      frames: this.anims.generateFrameNumbers("mouse", {
        start: 16,
        end: 18,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: "mouse_left", //mouse_left
      frames: this.anims.generateFrameNumbers("mouse", {
        start: 6,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: "mouse_down", //mouse_right
      frames: this.anims.generateFrameNumbers("mouse", {
        start: 11,
        end: 13,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: "mouse_up", //mouse_down
      frames: this.anims.generateFrameNumbers("mouse", {
        start: 2,
        end: 4,
      }),
      frameRate: 10,
      repeat: -1,
    })
  }
}
