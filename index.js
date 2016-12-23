const em = n => (+n).toFixed(2)+'em'

const base = 1.125 /* em */
const frameIcon = 'fa-square-o'
const checkIcon = 'fa-check'

const frame = ({
  class: {
    'fa fa-stack-2x': true,
    [frameIcon]: true
  },
  style: {
    'font-size': em(base)
  }
})

const check = ({
  class: {
    'fa fa-stack-1x': true,
    [checkIcon]: true
  },
  style: {
    'font-size': em((2/3) * base)
  }
})

const stack = ({
  class: {
    'fa-stack': true
  },
  style: {
    'position': 'relative',
    'display': 'inline-block',
    'width': em(base),
    'height': em(base),
    'line-height': em(base),
    'vertical-align': 'middle',
    'cursor': 'pointer'
  }
})

module.exports = {
  name: 'checkbox',
  props: {
    value: Boolean
  },
  methods: {
    toggle: function () {
      this.$emit('input', !this.value)
    }
  },
  render: function (h, context) {
    let checkboxFrame = h('i', frame)
    let checkboxCheck = this.value ? h('i', check) : null
    let on = { click: this.toggle }
    let options = Object.assign({ on }, stack)
    return h('span', options, [ checkboxFrame, checkboxCheck ])
  }
}
