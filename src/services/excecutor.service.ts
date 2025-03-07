import axios from "axios";
import CircuitBreaker from "opossum";

export class CarService {
  static async externañServiceRequest() {
    if (Math.random() >= 0.5) {
      throw new Error("fail");
    }
    const data = await axios.get("http://localhost:3000");
    return data;
  }

  static getCarBreaker = () => {
    const breaker = new CircuitBreaker(CarService.externañServiceRequest, {
      errorThresholdPercentage: 50,
      resetTimeout: 5000,
    });

    breaker.fallback(() => {
      console.warn("Circuit Breaker Open");
      return { data: [] };
    });

    return breaker;
  };

  static async getCars() {
    try {
      const response = await this.getCarBreaker().fire();

      console.log("data:  ", response.data);
      return response.data;
    } catch (err) {
      console.log("err:  ", err);
    }
  }
}
