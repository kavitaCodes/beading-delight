import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pattern } from './pattern.model';
@Injectable({ providedIn: 'root' })
export class PatternService {
  imageFolder: string = '../../assets/images/';
  pdfFolder: string = '../../assets/PDF/';
  materialFolder: string = '../../assets/Material/';
  
  private patterns: Pattern[] = [
    new Pattern(
      'Crystal luSter flower Bracelet',
      'Use triangle weave, a variation of right-angle weave, to create and combine Japanese Hana-Ami motifs (Hana means “flower” and Ami means “stitch” or “net”) into a simple crystal flower bracelet.',
      this.imageFolder + 'Crystal-Luster-Flower-Bracelet_Large.jpg',
      this.pdfFolder + 'Crystal-Luster-Flower-Bracelet_Large.pdf',
      this.materialFolder + 'Crystal_Net.txt'
    ),
    new Pattern(
      'crystal net necklace',
      'The Beaded Crystal Net Necklace pattern is very easy to make. Adding all the Fire-polished crystals makes this necklaces sparkle like crazy. It will look like you are wearing a very expensive necklace and be the star of the party',
      this.imageFolder + 'crystal_net_1.jpg',
      this.pdfFolder + 'Crystal_Net.pdf',
      this.materialFolder + 'crystal-flower.txt'
    ),
    new Pattern(
      'RAW crystals bracelet',
      'This bracelet is very simple. You finish the RAW (right angle weave) base first. Then, weave the crystals on your base. You can make any number of rows as you wish.',
      this.imageFolder + 'Crystals on RAW.jpg',
      this.pdfFolder + 'RAW crystals bracelet.pdf',
      this.materialFolder + 'RAW crystals bracelet.txt'
    ),
    new Pattern(
      'Double spiral bracelet',
      'Use the spiral technique ,This technique is easy and fun. But yes, sometime it is hard to sew to the core beads. Try mixing different beads and see the result!',
      this.imageFolder + 'Double spiral bracelet.jpg',
      this.pdfFolder + 'Double Spiral Bracelet.pdf',
      this.materialFolder + 'crystal-flower.txt'
    ),
    new Pattern(
      'Flat Spiral bracelet',
      'The flat spiral stitch is deceptively simple but results in a flexible beadwork which can be subtle or bold depending on the beads you choose.',
      this.imageFolder + 'FlatSpiral-Bead-Bracelet.jpg',
      this.pdfFolder + 'Flat Spiral bracelet.pdf',
      this.materialFolder + 'Flat Spiral bracelet.txt'
    ),
    new Pattern(
      'Pearly night bracelet',
      'Use the right angle weave to create this wonderful bracelet',
      this.imageFolder + 'Pearly-night bracelet.jpg',
      this.pdfFolder + 'Pearly Night Bracelet.pdf',
      this.materialFolder + 'Pearly Night Bracelet.txt'
    ),
    new Pattern(
      'RibbonCandy bracelet',
      'A right angle weave tutorial, fully illustrated with detailed step-by-step instructions, perfect for beginner beaders.',
      this.imageFolder + 'RibbonCandy.jpg',
      this.pdfFolder + 'Ribbon Candy.pdf',
      this.materialFolder + 'Ribbon Candy.txt'
    ),
    new Pattern(
      'Twisted tubular Herringbone bracelet',
      'Twisted Tubular Herringbone Stitch is a variation of regular Tubular Herringbone. This bead-weaving stitch adds a gentle spiral effect to the beadwork that is not present in the normal version.',
      this.imageFolder + 'Twisted-Tubular-Herringbone-Bangle.jpg',
      this.pdfFolder + 'Twisted tubular herringbone bracelet.pdf',
      this.materialFolder + 'Twisted tubular herringbone bracelet.txt'
    ),
    new Pattern(
      'Wirlpool Necklace',
      'Whirlpool Necklace uses a cellini spiral focal. To make this necklace, you will bead a cellini spiral rope, which is a variation of the ever-popular tubular peyote stitch.',
      this.imageFolder + 'Whirlpool-Necklace-Main.png',
      this.pdfFolder + 'Whirlpool necklace.pdf',
      this.materialFolder + 'Whirlpool necklace.txt'
    ),
  ];

  getPatterns() {
    return this.patterns.slice();
  }

  getPattern(index: number) {
    return this.patterns[index];
  }
}
