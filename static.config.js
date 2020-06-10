import path from 'path'
import axios from 'axios'
import { rebuildRoutes } from 'react-static/node'
import { addPrefetchExcludes } from 'react-static'


// addPrefetchExcludes(['properties'])

const getDataTestFunc = async () => {
	const { data: props } = await axios.get(
		'https://real-estate-node-dev.herokuapp.com/api/v1/properties'
		// 'http://localhost:3000/api/v1/properties'
	)
	return props;
}


// setInterval(rebuildRoutes, 10000)

export default {
  getRoutes: async () => {
		const props = await getDataTestFunc();
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