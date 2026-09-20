import * as Phaser from 'phaser';
import { Scene } from 'phaser';

export class Game extends Scene {
  private player!: Phaser.GameObjects.Image;
  private keys!: { [key: string]: Phaser.Input.Keyboard.Key };
  constructor() {
    super('Game');
  }

  preload() {
    // Load your assets here
    this.load.image('lattialista', '/assets/lattialista.png');
    this.load.image('duke', '/assets/pruse.png');
  }

  create() {
    // Create your game objects here
    this.add.image(1920 / 2, 440, 'lattialista');
    this.player = this.add.image(200, 840, 'duke').setScale(0.5);

    this.keys = this.input.keyboard?.addKeys({
      A: Phaser.Input.Keyboard.KeyCodes.A,
      D: Phaser.Input.Keyboard.KeyCodes.D,
    }) as { [key: string]: Phaser.Input.Keyboard.Key };
  }

  update() {
    const speed = 5;
    if (this.keys.A.isDown) this.player.x -= speed;
    else if (this.keys.D.isDown) this.player.x += speed;
  }
}
