import { render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

import Search from "./Search";

const onChange = jest.fn();

describe("Search component", () => {
  test(`renders Serach component`, () => {
    render(
      <Search value="" onChange={onChange}>
        Find :
      </Search>
    );

    expect(screen.getByText(/find/i)).toBeInTheDocument();
  });

  test(`renders without children`, () => {
    render(<Search value="" onChange={onChange} />);

    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  test(`renders without placeholder`, () => {
    render(<Search value="" onChange={onChange} />);

    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });

  test(`custom placeholder work correctly`, () => {
    render(<Search value="" onChange={onChange} placeholder="find post" />);

    expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument();
  });

//   test(`onChange works`, () => {
//     render(
//       <Search  value="" onChange={onChange}>
//         Find:
//       </Search>
//     );
//   });

//   useEvent.type(screen.getByRole('textbox'), 'React');

//   expect(onChange).toHaveBeenCalledTimes(5)

});
