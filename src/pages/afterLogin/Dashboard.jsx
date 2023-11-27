import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdmin, updateAdmin } from "../slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Dashboard() {
  const { admindata } = useSelector((state) => state.login);
  const [checkedSong, setCheckedSong] = useState("yes");
  const [dataToUpdate, setDataToUpdate] = useState({
    category_6: admindata?.category_6,
    category_7: admindata?.category_7,
    category_8: admindata?.category_8,
    category_9: admindata?.category_9,
    category_10: admindata?.category_10,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdmin());
  }, [checkedSong]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataToUpdate((prestate) => ({
      ...prestate,
      [name]: value,
    }));
  };

  const handleUpdatePrice = () => {
    const payload = {
      amount: {
        category_6: Number(dataToUpdate.category_6),
      },
    };
    if (payload.amount.category_6) {
      toast.success("success");
    }
    dispatch(updateAdmin(payload));
    setCheckedSong("no");
  };
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    const mychart = new Chart(ctx, {
      type: "bar",
      data: {
        // labels: ,
        datasets: [
          {
            label: "# of Votes",
            data: admindata,
            backgroundColor: "#F0C3F1",
            borderWidth: 1,
            barThickness: 30,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    return () => {
      mychart.destroy();
    };
  }, [admindata]);
  return (
    <div>
      <div className="dashboard-page">
        <div className="">
          <p className="header" style={{ marginBottom: "0" }}>
            Social,Hebbal on Dhun Jam
          </p>
          <div className="custom-section">
            <div>
              <p>Do you want to charge your customers for requesting songs?</p>
              <p>Custom song request amount-</p>
              <p>Regular song request amounts, from high to low-</p>
            </div>
            <div>
              <div className="radio-btn">
                <div>
                  <input
                    type="radio"
                    value="yes"
                    checked={checkedSong === "yes"}
                    onChange={() => setCheckedSong("yes")}
                  />
                  <span>Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    value="no"
                    checked={checkedSong === "no"}
                    onChange={() => setCheckedSong("no")}
                  />
                  <span>No</span>
                </div>
              </div>
              <input
                type="number"
                name="category_6"
                value={dataToUpdate?.category_6}
                onChange={handleInputChange}
              />
              <div className="regular_field">
                <input
                  type="number"
                  // name="category_7"
                  value={admindata?.category_7}
                  // onChange={handleInputChange}
                />
                <input
                  type="number"
                  // name="category_8"
                  value={admindata?.category_8}
                  // onChange={handleInputChange}
                />
                <input
                  type="number"
                  // name="category_9"
                  value={admindata?.category_9}
                  // onChange={handleInputChange}
                />
                <input
                  type="number"
                  // name="category_10"
                  value={admindata?.category_10}
                  // onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="graph-section">
            <div className="INR_currency">
              <span class="material-symbols-outlined">currency_rupee</span>
            </div>
            <canvas id="myChart"></canvas>
            <button
              className="save-btn"
              disabled={dataToUpdate.category_6 >= 99 && checkedSong==='yes' ? false : true}
              onClick={handleUpdatePrice}
            >
              save
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
