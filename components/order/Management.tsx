"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"

const OrderCard = ({
  title,
  quantity,
  price,
  status,
  progress,
  showTracking,
  extraButtons = [],
}: any) => {
  const router = useRouter();
  return (
    <Card className="w-full bg-neutral-800 border border-neutral-50/30 rounded-xl px-4 sm:px-6 py-6 flex flex-col gap-8">

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

        {/* LEFT */}
        <div className="flex gap-4">
          <div className="w-10 h-10 p-2 bg-indigo-600/20 rounded-lg flex items-center justify-center">
           <ShoppingCart className="w-5 h-5 text-blue-600 rounded-sm" />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-neutral-50 text-lg sm:text-xl font-semibold font-hk">
              {title} {quantity && `(x${quantity})`}
            </h3>
            <p className="text-neutral-50/60 text-sm sm:text-base font-medium font-hk">
              ORD-5678 • Ordered on 2025-11-10
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="text-neutral-50 text-base font-semibold font-hk">
            {price}
          </div>

          <div className="px-3 py-1 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-neutral-50 text-xs font-medium font-hk">
              {status}
            </span>
          </div>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-neutral-50/60 text-m font-semibold font-hk">
          <span>Order Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="w-full h-3 bg-indigo-600/10 rounded-full">
          <div
            className="h-3 bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* INFO BOX */}
      <div className="w-full bg-neutral-800 border border-neutral-50/10 rounded-lg px-4 py-4 flex flex-col md:flex-row gap-6 md:gap-16">

        <div className="flex flex-col gap-1">
          <span className="text-neutral-50 text-m font-semibold font-hk">
            Estimated Delivery
          </span>
          <span className="text-neutral-50/60 text-sm font-medium font-hk">
            2025-11-25
          </span>
        </div>

        {showTracking && (
          <div className="flex flex-col gap-1">
            <span className="text-neutral-50 text-sm font-semibold font-hk">
              Tracking Number
            </span>
            <span className="text-neutral-50/60 text-sm font-medium font-hk">
              TRK123456789
            </span>
          </div>
        )}

        <div className="flex flex-col gap-1">
          <span className="text-neutral-50 text-m font-semibold font-hk">
            Status
          </span>
          <span className="text-neutral-50/60 text-sm font-medium font-hk">
            {status}
          </span>
        </div>
      </div>

      {/* ACTIONS */}
     <div
  className={`flex flex-col sm:flex-row sm:flex-wrap gap-4 ${
    (showTracking || extraButtons.length > 0) ? "pt-4 border-t border-neutral-50/10" : ""
  }`}
>

        {/* <Button
          variant="outline"
          className="h-11 px-4 py-2 border-neutral-50/30 text-neutral-50 bg-transparent hover:bg-neutral-700 rounded-lg font-hk text-[15px]"
        >
          View Details
        </Button> */}

        {showTracking && (
          <Button onClick={()=>router.push('/order/track')} className=" cursor-pointer h-11 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-neutral-50 rounded-lg font-hk font-semibold text-[15px]">
            Track Shipment
          </Button>
        )}

        {extraButtons.map((btn: string, index: number) => (
          <Button
            key={index}
            variant="outline"
            className="px-4 py-2 border-neutral-50/30 text-neutral-50 bg-transparent hover:bg-neutral-700 rounded-lg font-hk"
          >
            {btn}
          </Button>
        ))}
      </div>
    </Card>
  )
}

const Management = () => {
  return (
    <div className="w-full min-h-screen">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 flex flex-col gap-8">

        {/* HEADER */}
        <div className="flex flex-col gap-2">
          <h1 className="text-neutral-50 text-3xl sm:text-4xl font-semibold font-hk">
            Order Management
          </h1>
          <p className="text-neutral-50/60 text-base sm:text-lg font-medium font-hk">
            Track and manage your orders
          </p>
        </div>

        {/* ORDERS */}
        <div className="flex flex-col gap-8">

          <OrderCard
            title="Desk Chairs"
            quantity={10}
            price="$12,500"
            status="In Production"
            progress={45}
             showTracking
          />

          <OrderCard
            title="Standing Desks"
            quantity={5}
            price="$12,500"
            status="Shipped"
            progress={75}
            showTracking
          />

          <OrderCard
            title="Monitor Arms"
            price="$12,500"
            status="Delivered"
            progress={100}
            showTracking
            extraButtons={["Download Invoice"]}
          />

          <OrderCard
            title="Office Lighting"
            price="$12,500"
            status="Processing"
            progress={25}
          />

          <OrderCard
            title="Conference Table"
            price="$12,500"
            status="Out for Delivery"
            progress={90}
            showTracking
          />

        </div>
      </div>
    </div>
  )
}

export default Management
