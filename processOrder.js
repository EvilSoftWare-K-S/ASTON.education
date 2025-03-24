const orders = [
    { id: 1, item: "Laptop", paid: true },
    { id: 2, item: "Phone", paid: false },
    { id: 3, item: "Tablet", paid: true },
  ];
  
  const deliveryData = {
    1: "Delivered in 3 days",
    3: "Delivered in 5 days",
  };
  

  function fetchDeliveryInfo(orderId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ orderId, deliveryTime: deliveryData[orderId] || "Unknown" });
      }, 1000);
    });
  }
  //-------------------------------------------------
  

  async function processOrder() {
    try {

      const fetchedOrders = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(orders);
        }, 2000);
      });
  

      const paidOrders = fetchedOrders.filter((order) => order.paid);
  

      const deliveryPromises = paidOrders.map((order) =>
        fetchDeliveryInfo(order.id)
      );
  

      const deliveryResults = await Promise.all(deliveryPromises);
  

      const finalOrders = paidOrders.map((order) => {
        const deliveryInfo = deliveryResults.find(
          (result) => result.orderId === order.id
        );
        return {
          ...order,
          deliveryTime: deliveryInfo ? deliveryInfo.deliveryTime : "Unknown",
        };
      });
  
      console.log("Финальный список заказов с информацией о доставке:");
      console.log(finalOrders);
    } catch (error) {
      console.error("Ошибка при обработке заказов:", error);
    }
  }
  
  processOrder();