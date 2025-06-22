import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import Nora from "@primeuix/themes/nora"
import PrimeVue from "primevue/config"
import { ProductServiceSymbol } from '@/interfaces/ProductServiceInterface'
import { ProductService } from '@/services/ProductService'
import { CartServiceSymbol } from '@/interfaces/CartServiceInterface'
import { CartService } from '@/services/CartService'


createApp(App)
    .use(
        PrimeVue, {
            theme: {
                preset: Nora
            },
        }
    )
    .provide(ProductServiceSymbol, new ProductService())
    .provide(CartServiceSymbol, new CartService())
    .mount('#app')
