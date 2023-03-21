import React, { useState } from "react";

import axios from "axios";
import "../Styles/Addproduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const initialState = {
  name: "",
  weight: "",
  particular: "",
  composition: "",
  mrp: "",
  rate: "",
  imgUrl: "",
};
const options = [
  "Face wash",
  "Soap",
  "Oil",
  "Lotion",
  "Tablets",
  "Capsules",
  "Dusting Powder",
  "Cream",
  "Ointment",
  "Injection",
  "Shampoo",
];
const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  return today;
};

const AddProduct = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [categoryErrMsg, setCategoryErrMsg] = useState(null);
  // const { title, description, category, imageUrl } = formValue;
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setEditMode(true);
      getSingleBlog(id);
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id]);

  const getSingleBlog = async (id) => {
    const singleBlog = await axios.get(`http://localhost:5000/blogs/${id}`);
    if (singleBlog.status === 200) {
      setFormValue({ ...singleBlog.data });
    } else {
      alert("Something Went Wrong");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!particular) {
      setCategoryErrMsg("Please select a category");
    }

    // const imageValidation = !editMode ? imageUrl : true;

    if (name && weight && particular && composition && mrp && rate) {
      const currentDate = getDate();
      if (!editMode) {
        const updatedData = { ...formValue, date: currentDate };
        const response = await axios.post(
          "http://localhost:5000/pharma",
          updatedData
        );
        console.log(response);
        if (response.status === 201) {
          alert(" Your Recipe Posted Successfully");
        } else {
          alert("Something Went Wrong");
        }
      } else {
        const response = await axios.put(
          `http://localhost:5000/blogs/${id}`,
          formValue
        );
        console.log(response);
        if (response.status === 200) {
          alert("Your Recipe Updated Successfully");
        } else {
          alert("Something Went Wrong");
        }
      }

      setFormValue({
        name: "",
        weight: "",
        particular: "",
        composition: "",
        mrp: "",
        rate: "",
        imgUrl: "",
      });
      // navigate("/hotpicks");
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const onUploadImage = (file) => {
    console.log("file", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mivjmkcg");
    axios
      .post("https://api.cloudinary.com/v1_1/dvuphar2o/image/upload", formData)
      .then((res) => {
        alert("Image Uploaded Successfully");
        setFormValue({ ...formData, imgUrl: res.data.url });
        console.log(res.data.url);
      });
  };
  const onCategoryChange = (e) => {
    setCategoryErrMsg(null);
    setFormValue({ ...formValue, category: e.target.value });
  };
  const { name, weight, particular, composition, mrp, rate, imgUrl } =
    formValue;
  return (
    <div>
      <p className="disaster1">{editMode ? "Update Product" : "Add product"}</p>
      <form action="" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={name || ""}
          type="text"
          onChange={(e) => {
            onInputChange(e);
          }}
          required
          label="Name"
        />
        <br />
        <input
          name="weight"
          placeholder="Weight"
          value={weight || ""}
          type="number"
          onChange={onInputChange}
          required
          label="Weight"
        />
        <input
          name="particular"
          placeholder="Particular"
          value={particular || ""}
          type="text"
          onChange={onInputChange}
          required
          label="particular"
        />
        <input
          name="compostion"
          placeholder="Compostion"
          value={composition || ""}
          type="number"
          onChange={onInputChange}
          required
          label="Compostion"
        />
        <input
          name="mrp"
          placeholder="MRP"
          value={mrp || ""}
          type="number"
          onChange={onInputChange}
          required
          label="number"
        />
        <input
          name="rate"
          placeholder="Rate"
          value={rate || ""}
          type="number"
          onChange={onInputChange}
          required
          label="Rate"
        />
        <br />
        {!editMode && (
          <>
            <input
              type="file"
              onChange={(e) => onUploadImage(e.target.files[0])}
              required
              placeholder="No file Choosen"
            />
            <br />
          </>
        )}

        <select
          className="categoryDropddown"
          onChange={(e) => onCategoryChange(e)}
          value={particular}
        >
          <option>Please select Category</option>
          {options.map((option, index) => (
            <option value={option || ""} key={index}>
              {option}
            </option>
          ))}
        </select>

        {categoryErrMsg && (
          <div className="categoryErrorMsg">{categoryErrMsg}</div>
        )}
        <br />
        <br />
        <input type="submit" />
      </form>
      <button className="disaster" onClick={() => navigate("/")}>
        GO BACK
      </button>
    </div>
  );
};

export default AddProduct;
