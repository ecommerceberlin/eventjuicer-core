

const apiFetch = (endpoint) => ({
        queryKey: [endpoint],
        queryFn: () => fetch(`https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com/${endpoint}`).then(response => response.json()),
    })

export default apiFetch