const pricing = {
  monthly: [
    {
      plan: 'basic',
      price: 19.99
    },
    {
      plan: 'pro',
      price: 24.99
    },
    {
      plan: 'master',
      price: 39.99
    }
  ],
  yearly: [
    {
      plan: 'basic',
      price: 199.99
    },
    {
      plan: 'pro',
      price: 249.99
    },
    {
      plan: 'master',
      price: 399.99
    }
  ]
}

const prices = document.querySelectorAll('.amount')
const toggle = document.querySelector('input')

let isYearly = false

function renderPrice(){
  const pricingOption = isYearly ? pricing.yearly : pricing.monthly

  prices.forEach((el, idx) => {
    el.innerHTML = `<span>&dollar;</span>${pricingOption[idx].price}`
  })
}

toggle.addEventListener('click', () => {
  isYearly = !isYearly;
  renderPrice()
})
