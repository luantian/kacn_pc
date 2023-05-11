export const useColor = () => useState<string>('color', () => 'pink')

export const useCountry = () => useState<string>('country', () => 'USA')

export const useCurrency = () => useState<string>('currency', () => 'USD')