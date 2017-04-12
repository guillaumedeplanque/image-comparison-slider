export default class Comparison {

  constructor() {
    const comparisons = document.querySelectorAll('.comparison-slider');
    if(comparisons != null && comparisons.length > 0) this.init(comparisons);
  }

  init(comparisons) {
    comparisons.forEach((comparison) => {
      comparison.style.paddingTop = `${this.decimal('ceil', (comparison.dataset.imageHeight / comparison.dataset.imageWidth) * 100, -2)}%`;
      comparison.addEventListener('mousemove', (e) => {
        this.slide(comparison.querySelector('.before'), comparison.querySelector('.after'), e.clientX, comparison);
      });
    });
  }

  slide(before, after, position, container) {
    const width = position - container.offsetLeft;
    before.style.width = `${width}px`;
    after.style.width = `${container.offsetWidth - width}px`;
  }

  decimal(type, value, exp) {
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    if (value < 0) {
      return - this.decimal(type, -value, exp);
    }
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }
}
