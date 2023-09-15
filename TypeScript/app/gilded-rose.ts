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
		return this.items.map((item, i) => {
			if(item.name != 'Sulfuras, Hand of Ragnaros' && item.quality > 0)
			{
				if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert')
					item.quality -= 1;
				else if (item.quality < 50) {
					item.quality += 1;
					if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
						if (item.sellIn < 11 && item.quality < 50)
							item.quality += 1
	
						if (item.sellIn < 6 && item.quality < 50)
							item.quality += 1
					}
				}
	
				item.sellIn -= 1;
	
				if (item.sellIn < 0) {
					if (item.name !== 'Aged Brie')
						item.quality -= item.name !== 'Backstage passes to a TAFKAL80ETC concert' ? 1 : item.quality
					else if (item.quality < 50)
						item.quality += 1
				}
			}
			return item;
		});
		/* for (let i = 0; i < this.items.length; i++) {
			if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
				if (this.items[i].quality > 0) {
					if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
						this.items[i].quality = this.items[i].quality - 1
					}
				}
			} else {
				if (this.items[i].quality < 50) {
					this.items[i].quality = this.items[i].quality + 1
					if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
						if (this.items[i].sellIn < 11) {
							if (this.items[i].quality < 50) {
								this.items[i].quality = this.items[i].quality + 1
							}
						}
						if (this.items[i].sellIn < 6) {
							if (this.items[i].quality < 50) {
								this.items[i].quality = this.items[i].quality + 1
							}
						}
					}
				}
			}
			if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
				this.items[i].sellIn = this.items[i].sellIn - 1;
			}
			if (this.items[i].sellIn < 0) {
				if (this.items[i].name != 'Aged Brie') {
					if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
						if (this.items[i].quality > 0) {
							if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
								this.items[i].quality = this.items[i].quality - 1
							}
						}
					} else {
						this.items[i].quality = this.items[i].quality - this.items[i].quality
					}
				} else {
					if (this.items[i].quality < 50) {
						this.items[i].quality = this.items[i].quality + 1
					}
				}
			}
		}

		return this.items; */
	}
}
