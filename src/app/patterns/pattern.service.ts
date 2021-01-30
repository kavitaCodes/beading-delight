import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pattern } from './pattern.model'
@Injectable({ providedIn: 'root' })
export class PatternService {

  // patternSelected =  new EventEmitter<Pattern>();
  patternSelected =  new Subject<Pattern>();

  private patterns: Pattern[] =[
    new Pattern('Crystal Luster Flower Bracelet', 'Use triangle weave, a variation of right-angle weave, to create and combine Japanese Hana-Ami motifs (Hana means “flower” and Ami means “stitch” or “net”) into a simple crystal flower bracelet.',
          '../../assets/images/Crystal-Luster-Flower-Bracelet_Large.jpg'),
    new Pattern('crystal net necklace','The Beaded Crystal Net Necklace pattern is very easy to make. Adding all the Fire-polished crystals makes this necklaces sparkle like crazy. It will look like you are wearing a very expensive necklace and be the star of the party',
          '../../assets/images/crystal_net_1.jpg'),
    new Pattern('RAW crystals bracelet','This bracelet is very simple. You finish the RAW (right angle weave) base first. Then, weave the crystals on your base. You can make any number of rows as you wish.',
          '../../assets/images/Crystals on RAW.jpg'),
    new Pattern('Double spiral bracelet','Use the spiral technique ,This technique is easy and fun. But yes, sometime it is hard to sew to the core beads. Try mixing different beads and see the result!',
          '../../assets/images/Double spiral bracelet.jpg'),
    new Pattern('Flat Spiral bracelet','The flat spiral stitch is deceptively simple but results in a flexible beadwork which can be subtle or bold depending on the beads you choose.',
           '../../assets/images/FlatSpiral-Bead-Bracelet.jpg'),
    new Pattern('Pearly night bracelet','Use the right angle weave to create this wonderful bracelet',
           '../../assets/images/Pearly-night bracelet.jpg'),
    new Pattern('RibbonCandy bracelet','A right angle weave tutorial, fully illustrated with detailed step-by-step instructions, perfect for beginner beaders.',
           '../../assets/images/RibbonCandy.jpg'),
     new Pattern('Twisted Tubular Herringbone','Twisted Tubular Herringbone Stitch is a variation of regular Tubular Herringbone. This bead-weaving stitch adds a gentle spiral effect to the beadwork that is not present in the normal version.',
            '../../assets/images/Twisted-Tubular-Herringbone-Bangle.jpg'),
    new Pattern('Wirlpool Necklace','Whirlpool Necklace uses a cellini spiral focal. To make this necklace, you will bead a cellini spiral rope, which is a variation of the ever-popular tubular peyote stitch.',
            '../../assets/images/Whirlpool-Necklace-Main.png'),

  ];

  getPatterns() {
    return this.patterns.slice();
  }

}
