
<div class=" relative flex flex-col bg-gray rounded-lg shadow-md p-6 hover:shadow-lg transition">
<div class="relative flex flex-col bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>

  <div class="card-body">
     <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ $title }}</h3>
   <p class="text-sm text-gray-600 mb-4">{{ $description }}</p> 
    <div class="flex flex-wrap gap-2 mb-4">
        @foreach ($tech as $item)
            <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">{{ $item }}</span>
        @endforeach
    </div>
      <a href="{{ url($link) }}"  class="text-blue-600 hover:underline text-sm">View Project →</a>
    </div>
  </div>
</div>

