import toast from "react-hot-toast";

export const fetchUserData = async (page = 1, limit = 9) => {
  try {
    
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}v1/apis?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(res=>res.json());
    console.log(response);
    if (!response.data) {
      throw new Error(`Error: ${response.status}`);
    }

    
    return response;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const fetchDealsData = async ({
  page = 1,
  limit = 10,
  dealType = null,
  companyName = null,
}) => {
  try {

    // Construct the query parameters
    const queryParams = new URLSearchParams({
      page: (page || 1).toString(),
      limit: (limit || 10).toString(),
      ...(dealType !== null && { dealType: dealType.toString() }),
      ...(companyName !== null && { companyName: companyName.toString() }),
    }).toString();

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}v1/apis/deals?${queryParams}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching deals data:", error);
    return null;
  }
};
export const fetchSearchAndFilterData = async ({
  searchTerm,
  page = 1,
  limit = 9,
  filterdata = {
    type: "",
    count: "",
    sort: "desc",
    location: "",
    platform: "",
  },
}) => {
  try {
    if (!filterdata) {
      filterdata = {
        type: "",
        count: "",
        sort: "desc",
        location: "",
        platform: "",
      };
    }

    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}v1/apis/searchandfilter?page=${page}&limit=${limit}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          search: searchTerm,
          type: filterdata.type || "",
          location: filterdata.location || "",
          platform: filterdata.platform || "",
          count: filterdata.count || "",
          sort: filterdata.sort || "desc",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching search and filter data:", error);
    return null;
  }
};
export const sendOTP = async({email})=>{
  try{
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}v1/apis/sendOTP`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email:email
        }),
      }
    );
    console.log("respnse",response)
     if (!response.ok) {
      
       throw new Error(`Error: ${response.status}`);
     }
     toast.success("OTP Sent successfully");
  }catch(error){
    console.log(error);
     toast.error("Failed to send OTP");
  }
}
export const getresettoken = async ({ email, SetEmailSent, setLoading }) => {
   setLoading(true);
  try {
   
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}v1/apis/reset-password-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    toast.success("Email Sent successfully");
    SetEmailSent(true);

  } catch (error) {
    console.log(error);
    toast.error("Failed to Email");
  }
      setLoading(false);
};
export const resetPassword = async ({
  password,
  confirmPassword,
  token,
  navigate,
  setLoading,
}) => {
  setLoading(true);
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}v1/apis/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          password: password,
          confirmPassword: confirmPassword,
          token: token,
        }),
      }
    ).then((res) => res.json());
    console.log("response of update", response);
    if (!response.success) {
      throw new Error(`Error: ${response.message}`);
    }
    toast.success("Password Changed Successfully");
    navigate("/");
  } catch (error) {
    console.log("unable to Reset password", error);
    toast.error(error.message);
  }
   setLoading(false);
};

