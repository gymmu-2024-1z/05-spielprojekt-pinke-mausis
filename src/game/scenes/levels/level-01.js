import Flower from "../../gameObjects/pickups/flower"
import Mushroom from "../../gameObjects/pickups/mushroom"
import Base2DScene from "../base-2d-scene"

/**
 * Spiellogik für das Level01.
 */
export default class Level01 extends Base2DScene {
  /**
   * Der Konstruktor wird von Phaser verwendet, um die Szene zu erstellen.
   */
  constructor() {
    super({ key: "level-01" })
  }

  /**
   * Hier werden alle Ressourcen geladen, die spezifisch für dieses Level / diese
   * Szene benötigt werden.
   */
  preload() {
    this.load.tilemapTiledJSON(
      "map-level-01",
      "./assets/maps/map-level-01.json",
    )
  }

  /**
   * Mit der Methode werden alle Spielobjekte für eine Szene erstellt.
   */
  create() {
    // Sicherstellen, dass der Spieler korrekt erstellt wurde
    if (!this.player) {
      console.error("Player object is missing in create method.")

      // Wenn der Spieler nicht existiert, initialisieren wir ihn hier (als Beispiel):
      this.player = this.add.sprite(100, 100, "player") // Initialisiere einen neuen Spieler.

      // Optional: Setze maxHp, hp und andere Attribute des Spielers, wenn erforderlich.
      this.player.maxHp = 100
      this.player.hp = 100
      this.player.speed = 100
    }

    // Setze das Level zurück, falls es neu gestartet wird.
    this.resetLevel()

    // Wir rufen die Basis-Methode `create` auf, um die Welt basierend auf der Karte zu erstellen.
    super.create("map-level-01")

    // Kamera-Effekte setzen (optional).
    this.tweens.add({
      targets: this.cameras.main.followOffset,
      x: 400,
      duration: 500,
      ease: "Power3",
      yoyo: true,
    })
  }

  /**
   * Setze alle zustandsabhängigen Elemente im Level zurück (z. B. Gesundheit, Position, etc.).
   */
  resetLevel() {
    // Sicherstellen, dass der Spieler nicht null ist
    if (this.player) {
      // Setze den Spielerzustand zurück (Gesundheit, Geschwindigkeit, etc.).
      this.player.hp = this.player.maxHp // Setze die Gesundheit auf den maximalen Wert zurück
      this.player.speed = 100 // Setze die Geschwindigkeit zurück, falls sie sich während des Spiels geändert hat

      // Setze andere Statistiken, Items oder Position zurück
      this.player.setPosition(100, 100) // Setze die Spielerposition auf den Startpunkt zurück (Beispiel)
      this.player.setScale(1) // Setze die Spielerskalierung zurück (für den Fall, dass sie verändert wurde)
    } else {
      console.error("Player object is not initialized properly.")
    }
  }

  /**
   * @override Überschreibt die Funktionalität der Base2DScene-Klasse.
   *
   * Diese Methode wird immer dann aufgerufen, wenn der Spieler eine
   * Überschneidung mit einem Spielobjekt hat, das aufgenommen werden kann.
   */
  pickUp(actor, item) {
    super.pickUp(actor, item)

    // Behandelt, was passiert, wenn der Spieler eine Blume oder einen Pilz aufnimmt.
    if (item instanceof Flower) {
      this.player.addKey("level-02")
      this.player.increaseSpeed(100)
      this.player.heal(20)
    } else if (item instanceof Mushroom) {
      this.player.decreaseSpeed(100)
      this.player.damage(200)
    }
  }

  update() {
    super.update()

    // Sicherstellen, dass der Spieler existiert, bevor wir auf seine Eigenschaften zugreifen
    if (this.player && this.player.hp <= 0) {
      this.scene.start("GameOverScene")
    }
  }
}
