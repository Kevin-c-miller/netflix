import React from 'react'

export default function TestCards() {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="w-full p-2.5 text-center text-sm font-normal text-white md:w-2/5 md:p-3.5 md:text-base">
          <td className="tableDataTitle">
            To simulate a successful payment, use test cards from the following
            list. The billing country for each test card is set to the United
            States.
          </td>
        </tr>
        <tr className="tableRow">
          <td className="w-100 md:w-100 mx-2 p-2.5 text-center text-[12px] text-[#e50914] md:mx-10 md:text-lg">
            BRAND
          </td>
          <td className="w-100 md:w-100 mx-2 p-2.5 text-center text-[12px] text-[#e50914] md:mx-20 md:text-lg">
            NUMBER
          </td>
          <td className="w-100 md:w-100 mx-2 p-2.5 text-center text-[12px] text-[#e50914] md:mx-20 md:text-lg">
            CVC
          </td>
          <td className="w-100 md:w-100 mx-2 p-2.5 text-center text-[12px] text-[#e50914] md:mx-20 md:text-lg">
            EXP. DATE
          </td>
        </tr>
        <tr className="tableRow">
          <td className="w-100 md:w-100  mx-1 p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            Visa
          </td>
          <td className="w-100 md:w-100  mx-1 p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            4242424242424242
          </td>
          <td className="w-100 md:w-100  mx-1 p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            Any 3 digits
          </td>
          <td className="w-100 md:w-100  mx-1 p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            Any future date
          </td>
        </tr>
        <tr className="tableRow">
          <td className="w-100 md:w-100  mx-1 p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            MC
          </td>
          <td className="w-100 md:w-100  mx-1 p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            5555555555554444
          </td>
          <td className="w-100 md:w-100  mx-1 p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            Any 3 digits
          </td>
          <td className="w-100 md:w-100 mx-1 p-2.5  text-center text-[8px] md:mx-10 md:text-lg">
            Any future date
          </td>
        </tr>
        <tr className="tableRow">
          <td className="w-100 md:w-100  mx-1 p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            AmEx
          </td>
          <td className="w-100 md:w-100  mx-1 p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            378282246310005
          </td>
          <td className="w-100 md:w-100 mx-1 p-2.5  text-center text-[8px] md:mx-10 md:text-lg">
            Any 4 digits
          </td>
          <td className="w-100 md:w-100  mx-1 p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            Any future date
          </td>
        </tr>
        <tr className="tableRow">
          <td className="w-100 md:w-100 mx-1  p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            Discover
          </td>
          <td className="w-100 md:w-100 mx-1  p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            6011111111111117
          </td>
          <td className="w-100 md:w-100 mx-1  p-2.5 text-center text-[8px] md:mx-10 md:text-lg">
            Any 3 digits
          </td>
          <td className="w-100 md:w-100 mx-1 p-2.5 text-center  text-[8px] md:mx-10 md:text-lg">
            Any future date
          </td>
        </tr>
      </tbody>
    </table>
  )
}
