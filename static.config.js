import path from 'path'
import axios from 'axios'

export default {
  getRoutes: async () => {
    const { data: props } = await axios.get(
      'https://real-estate-node-dev.herokuapp.com/api/v1/properties'
		)

    return [
      {
        path: '/properties',
        getData: () => ({
          props,
        }),
        children: props.map(property => ({
          path: `/property/${property.id}`,
          template: 'src/containers/PropertyDetails',
          getData: () => ({
            property,
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}