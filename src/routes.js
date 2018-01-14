import LayoutDefault from '~layouts/Default'

import ViewIndex from '~views/Index'
import ViewError404 from '~views/error/404'

export default [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      { path: '', component: ViewIndex }
    ]
  },
  { path: '*', component: ViewError404 }
]
