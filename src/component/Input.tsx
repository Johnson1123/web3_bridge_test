import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [type, setType] = useState<string>("");
  const navigate = useNavigate();

  const hadndleSubmit = () => {
    if (amount == "") {
      console.log("amount should be number");
      return;
    }
    let data;
    if (window.localStorage.getItem("finance")) {
      data = JSON.parse(window.localStorage.getItem("finance") as string);
    } else {
      data = [];
    }

    const payload = {
      amount: amount,
      description: desc,
      type: type,
    };

    data.push(payload);
    window.localStorage.setItem("finance", JSON.stringify(data));
    navigate("/");
  };
  return (
    <div className="container-input">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          hadndleSubmit();
        }}
      >
        <div className="">
          <label htmlFor="">Description</label>
          <input
            type="text"
            required
            value={desc}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDesc(e.target.value)
            }
          />
        </div>
        <div className="">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            required
            value={amount}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.value)
            }
          />
        </div>
        <div className="">
          <label htmlFor="">Type</label>
          <select
            value={type}
            required
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setType(e.target.value)
            }
          >
            <option value="expenses">Expenses</option>
            <option value="savings">Savings</option>
          </select>
        </div>
        <data value="" className="btn">
          <input type="submit" value={"Add"} />
        </data>
      </form>
    </div>
  );
};

export default Input;
