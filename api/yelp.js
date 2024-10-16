import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Frgdxscuv22-q3LkrUzJXUR-yqEIAHXP9J5FJK65zmZP4lZv99YTJwGwRF1M2uP_tcxxcsOZTRI8WldB8JZlYpEWVW9gXqYXroDmlfQd3NBN_CA2rBTRCnI7fZufZnYx",
  },
});
