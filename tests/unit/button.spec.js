import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Button from '@/components/Button'
import '@/filters/uppercase'

const localVue = createLocalVue()

describe('Button', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Button, {
      localVue,
      propsData: {
        label: 'Example'
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders correctly', () => {
    expect(wrapper.find('[data-testid="label"]').text()).toBe('EXAMPLE')
  })

  it('renders with an icon', async () => {
    await wrapper.setProps({
      icon: 'fas fa-star'
    })
    expect(wrapper.find('[data-testid="icon"]').exists()).toBeTruthy()
  })

  it('renders with a link', async () => {
    await wrapper.setProps({
      link: '/favorites'
    })
    expect(wrapper.findComponent(RouterLinkStub).exists()).toBeTruthy()
  })
})
