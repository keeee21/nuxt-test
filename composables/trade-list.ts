type ApiResponse = {
  status: 'OK',
  data: {
    Municipality: string
    DistrictName: string
    Area: number
    TradePrice: number
    Use: string
  }[]
} | { status: 'ERROR' }

export const useTradeList = async() => {
  const { data: tradeList } = await useFetch('/webland/api/TradeListSearch', {
    baseURL: 'https://www.land.mlit.go.jp',
    query: {
      //2022年 第一四半期~第四四半期
      from: '20221',
      to: '20224',
      //東京都港区
      city: '13103',
    },
    transform: (response: ApiResponse ) => {
      return response.status === 'OK' ? response.data : []
    },
    // APIからデータ取得したときにログを出力するインターセプト
    onResponse: ({ response }) => {
      console.log(response)
    }
  })
  return { tradeList }
}
