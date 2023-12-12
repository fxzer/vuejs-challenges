import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'MyButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['custom-click'],
  setup(props, { emit, slots }) {
    return () =>
      h(
        'button',
        {
          disabled: props.disabled,
          onClick: () => emit('custom-click'),
        },
        slots.default?.(),
      )
  },
})
