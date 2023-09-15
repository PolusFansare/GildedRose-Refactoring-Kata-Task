export class Item {
	name: string;
	sellIn: number;
	quality: number;

	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

export class GildedRose {
	items: Array<Item>;

	constructor(items = [] as Array<Item>) {
		this.items = items;
	}

	updateQuality() {
		return this.items.map((item) => {
			if(item.name !== 'Sulfuras, Hand of Ragnaros')
			{
				item.sellIn -= 1;
				if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert' && item.quality > 0)
					item.quality -= (item.name !== 'Conjured Mana Cake') ? 1 : 2;
				else if (item.quality < 50) {
					item.quality++
					if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
						if (item.sellIn < 11 && item.quality < 50)
							item.quality++
						if (item.sellIn < 6 && item.quality < 50)
							item.quality++
					}
				}
	
				if (item.sellIn < 1) {
					if (item.name !== 'Aged Brie')
						item.quality -= (item.name !== 'Backstage passes to a TAFKAL80ETC concert' && item.quality > 0 && item.sellIn !== 0) ? 1 : item.quality
					else if (item.quality < 50)
						item.quality += 1
				}
			}
			return item;
		});
	}
}
