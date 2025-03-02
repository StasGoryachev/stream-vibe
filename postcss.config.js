import postcssPxToRem from 'postcss-pxtorem'

export default ({env}) => {
  const isProd = env === 'production'
  const plugins = []

  if(isProd) {
    plugins.push(
      postcssPxToRem({
         //все свойства будет обробатывать в файле css
         propList: ['*'],
         // и все медиавыражения
         mediaQuery: true,
      })
    )
  }

  return {
   plugins,
  }
}


