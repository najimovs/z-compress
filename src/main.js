import * as zstd from "@oneidentity/zstd-js"

const { ZstdSimple } = await zstd.ZstdInit()

const data = new Uint8Array( Array.from( { length: 1000 }, ( _, i ) => i % 256 ) )

console.log( data.length )

const compressedData = ZstdSimple.compress( data )
console.log( compressedData.length )

console.log( ZstdSimple.decompress( compressedData ) )
