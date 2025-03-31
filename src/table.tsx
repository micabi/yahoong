import { JSX } from 'react';
import type { Brands } from './modules/lists';
import uniqueBrandlist from './modules/lists';
import hiraToKana from './modules/hira2kana';
import './App.css';

function Table(props: { text: string; handleCount: (count: number) => void }): JSX.Element {
  let display: boolean = true;
  let showurl: boolean = false;
  const totalArray: number[] = []; // 文字が含まれているかどうかの判定を格納する配列 (-1: 含まれていない, 0以上: 含まれている)

  const listitems: JSX.Element[] = uniqueBrandlist.map((brand: Brands): JSX.Element => {
    if (props.text !== '') {
      totalArray.push(brand.en.toLowerCase().indexOf(props.text.toLowerCase()));
      totalArray.push(brand.ja.indexOf(hiraToKana(props.text)));
    }

    if (
      (props.text !== '' && brand.en.toLowerCase().indexOf(props.text.toLowerCase()) !== -1) ||
      (props.text !== '' && brand.ja.indexOf(hiraToKana(props.text)) !== -1)
    ) {
      display = true;
    } else if (props.text === '') {
      display = true;
    } else {
      display = false;
    }

    if (brand.url !== undefined) {
      showurl = true;
    } else {
      showurl = false;
    }
    function items(): JSX.Element {
      if (showurl) {
        return (
          <>
            <a href={brand.url} rel="noreferrer noopener" target="_blank">
              {brand.en}
            </a>
            <span className={`block text-xs text-slate-400 ${display ? '' : 'hidden'}`}>{brand.ja}</span>
          </>
        );
      } else {
        return (
          <>
            {brand.en}
            <span className={`block text-xs text-slate-400 ${display ? '' : 'hidden'}`}>{brand.ja}</span>
          </>
        );
      }
    }

    return (
      <div className={`item text-left text-sm ${display ? '' : 'hidden'}`} key={brand.id}>
        {items()}
      </div>
    );
  });

  let hit_brands: number = 0;
  for (let h: number = 0; h < totalArray.length; h++) {
    if (totalArray[h] !== -1) {
      hit_brands += 1;
    }
  }

  // 親コンポーネントApp.tsxに件数を渡す
  // useEffect((): void => {
  props.handleCount(hit_brands);
  // }, [props, hit_brands]);

  return (
    <>
      <div className="grid grid-cols-5 gap-3">{listitems}</div>
    </>
  );
}
export default Table;
