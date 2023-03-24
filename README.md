# kapucode

カプリコを食べながらカジュアルにプログラミングが学べるサイトです。

#　開発ログ
NextRouter was not mounted エラーを回避

```javascript

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function ExampleClientComponent() {
const router = useRouter();
const pathname = usePathname();
const searchParams = useSearchParams()!;

// Get a new searchParams string by merging the current
// searchParams with a provided key/value pair
const createQueryString = useCallback(
(name: string, value: string) => {
const params = new URLSearchParams(searchParams);
params.set(name, value);

      return params.toString();
    },
    [searchParams],

);

return (
<>
<p>Sort By</p>

      {/* using useRouter */}
      <button
        onClick={() => {
          // <pathname>?sort=asc
          // router.push(pathname + '?' + createQueryString('sort', 'asc'));
          router.push(pathname + "/test");
        }}
      >
        ASC
      </button>



    </>

);
}
```
