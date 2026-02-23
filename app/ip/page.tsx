import { headers } from 'next/headers';

async function getIpData() {
  try {
    const headerList = await headers();
    const forwarded = headerList.get('x-forwarded-for');
    
    // Logic: If on localhost, 'forwarded' might be null or ::1
    // In that case, we pass an empty string so ipapi.co auto-detects 
    // the IP of your internet router instead of the loopback.
    let userIp = ''; 
    if (forwarded && !forwarded.includes('::1') && !forwarded.includes('127.0.0.1')) {
      userIp = forwarded.split(',')[0];
    }

    const url = userIp ? `https://ipapi.co/${userIp}/json/` : `https://ipapi.co/json/`;
    
    console.log(`FETCHING FROM: ${url}`); // Look at your Terminal/Command Prompt

    const res = await fetch(url, {
      cache: 'no-store', // Disable cache for testing
    });

    const result = await res.json();

    if (result.error) {
      console.error("API returned an error object:", result);
      return { error: true, reason: result.reason };
    }

    return result;
  } catch (err) {
    console.error("Fetch failed entirely:", err);
    return { error: true, reason: "Fetch failed" };
  }
}

export default async function IpDetails() {
  const data = await getIpData();

  if (!data || data.error) {
    return (
      <div className="bg-amber-50 text-amber-800 p-6 rounded-lg border border-amber-200 max-w-md mx-auto mt-10">
        <h3 className="font-bold">Server-Side Fetch Issue</h3>
        <p className="text-sm mt-2">The API rejected the request or your IP is local.</p>
        <p className="text-xs bg-amber-100 p-2 mt-2 rounded italic">
          Reason: {data?.reason || "Check your terminal for logs"}
        </p>
      </div>
    );
  }

  // ... (The rest of your Tailwind JSX from before)
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 mt-10 font-sans">
       {/* UI code here */}
       <div className="p-4 bg-blue-600 text-white font-bold">Success: {data.ip}</div>
       <pre className="p-4 text-xs overflow-auto">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}