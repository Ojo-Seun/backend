import { Injectable } from "@nestjs/common";
import { products } from "../products";

@Injectable()
export class AppService {
  getHello(): { id: number }[] {
    return products;
  }
}
