import { useState, useEffect } from 'react';
import { useAuth } from '../../../hooks/authContext';

import api from '../../../hooks/api';
import Modal from 'react-modal';

export default function ModifyApps() {
  const [apps, setApps] = useState(null);
  const { user, token } = useAuth();

  const [currentUser, setCurrentUser] = useState(null);
  const [currentToken, setCurrentToken] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAppData, setNewAppData] = useState({
    name: '',
    description: '',
    appImage: '',
    appUrl: '',
    devName: '',
    devEmail: '',
    devRepoLink: '',
  });

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [errorText, setErrorText] = useState('');
  const [successText, setSuccessText] = useState('');

  useEffect(() => {
    setCurrentUser(user);
    setCurrentToken(token);
  }, [user, token, setCurrentUser, setCurrentToken]);

  useEffect(() => {
    async function fetchApps() {
      try {
        const response = await api.get('/hub/admin/apps/all', {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        });

        if (response.status === 200) {
          setApps(response.data.apps);
        } else {
          setApps([]);
        }
      } catch (err) {
        setApps([]);
      }
    }

    fetchApps();
  }, [currentToken, setApps, token]);

  const getApps = () => {
    console.log(apps);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = async (e) => {
    if (e.target.name === 'appImage') {
      setNewAppData({
        ...newAppData,
        appImage: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setNewAppData({
        ...newAppData,
        [e.target.name]: e.target.value,
      });
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/hub/admin/apps/create', newAppData, {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      });

      if (response.status === 201) {
        setSuccessText(response.message);
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
          setSuccessText('');

          return handleCloseModal();
        }, 3000);
      } else {
        setErrorText(response.message);
        setIsError(true);

        setTimeout(() => {
          setIsError(false);
          setErrorText('');

          return setNewAppData({
            name: '',
            description: '',
            appImage: '',
            appUrl: '',
            devName: '',
            devEmail: '',
            devRepoLink: '',
          });
        }, 5000);
      }
    } catch (err) {
      console.error(err);

      setErrorText(err.response.data.message);
      setIsError(true);
      
      setTimeout(() => {
        setIsError(false);
        setErrorText('');
      }, 5000);
    };
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row items-center justify-center w-full flex-shrink-0 bg-bg2 rounded border-b-2 border-b-fg p-2">
        <div className="flex flex-row items-center justify-start w-[30%]">
          <button onClick={handleOpenModal} className="font-inkfree text-fg text-2xl">New App</button>
        </div>

        <div className="flex flex-row items-center justify-evenly w-[30%]">
          <h1 className="font-inkfree italic text-fg text-2xl tracking-widest">
            {currentUser ? `Logged In: ${currentUser.username}` : 'Logged In: Loading...' }
          </h1>

          <img src={currentUser.profileImage} alt={`${currentUser.username}'s Profile Icon'`} className="w-[100px] h-[100px] rounded-full" />
        </div>

        <div className="flex flex-row items-center justify-end w-[30%]">
          <img src="/images/app-icon.jpg" alt="Mek's Hub Icon" className="w-[150px] h-[80px] rounded-lg mr-5" />
        </div>

        <Modal 
          isOpen={isModalOpen} 
          onRequestClost={handleCloseModal} 
          style={
            { 
              overlay: { 
                backgroundColor: 'rgba(0,0,0,0.5)',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              },
              content: {
                width: '80%',
                height: '600px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '20px',
                borderRadius: '5px',
                border: 'none',
                background: 'linear-gradient(145deg, var(--bg2), var(--bd), var(--bg2))',
              }, 
            }
          }>

          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-row items-center justify-evenly w-full flex-1">
              
              {/* app info  */}
              <div className="flex flex-col items-center justify-center w-[45%] h-full border-2 border-bd rounded-lg bg-bg2">
                <h3 className="font-inkfree font-bold underline text-fg text-2xl italic">Application Information</h3>

                <div className="flex flex-col items-center justify-evenly w-full h-full">
                  <div className="flex flex-row items-center justify-evenly w-[80%] mb-2">
                    <label htmlFor="name" className="font-inkfree tracking-wider text-fg text-xl w-[30%] mr-2">
                      App Name
                    </label>

                    <input type="text"
                          id="name"
                          name="name"
                          value={newAppData.name}
                          onChange={handleChange}
                          required
                          className="font-inkfree text-black text-lg border-black border-2 rounded-full p-2 text-center w-[70%] h-[40px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
                  </div>
                  
                  <div className="flex flex-row items-center justify-evenly w-[80%] mb-2">
                    <label htmlFor="name" className="font-inkfree tracking-wider text-fg text-xl w-[30%] mr-2">
                      App Desc
                    </label>

                    <input type="text"
                          id="description"
                          name="description"
                          value={newAppData.description}
                          onChange={handleChange}
                          required
                          className="font-inkfree text-black text-lg border-black border-2 rounded-full p-2 text-center w-[70%] h-[40px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
                  </div>
                  
                  <div className="flex flex-row items-center justify-evenly w-[80%] mb-2">
                    <label htmlFor="name" className="font-inkfree tracking-wider text-fg text-xl w-[30%] mr-2">
                      App Icon
                    </label>

                    <input type="file"
                          id="appImage"
                          name="appImage"
                          onChange={handleChange}
                          required
                          className="font-inkfree text-black text-base border-black border-2 rounded-full p-2 pl-6 pt-2 text-center w-[70%] h-[40px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
                  </div>
                  
                  <div className="flex flex-row items-center justify-evenly w-[80%] mb-2">
                    <label htmlFor="name" className="font-inkfree tracking-wider text-fg text-xl w-[30%] mr-2">
                      App URL
                    </label>

                    <input type="text"
                          id="appUrl"
                          name="appUrl"
                          value={newAppData.appUrl}
                          onChange={handleChange}
                          required
                          className="font-inkfree text-black text-lg border-black border-2 rounded-full p-2 text-center w-[70%] h-[40px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
                  </div>
                </div>
              </div>

              {/* dev info  */}
              <div className="flex flex-col items-center justify-start w-[45%] h-full border-2 border-bd rounded-lg bg-bg2">
                <h3 className="font-inkfree font-bold underline text-fg text-2xl italic">Developer Information</h3>

                <div className="flex flex-col items-center justify-evenly w-full h-full">
                  <div className="flex flex-row items-center justify-evenly w-[80%] mb-2">
                    <label htmlFor="name" className="font-inkfree tracking-wider text-fg text-xl w-[30%] mr-2">
                      Dev Name
                    </label>

                    <input type="text"
                          id="devName"
                          name="devName"
                          value={newAppData.devName}
                          onChange={handleChange}
                          required
                          className="font-inkfree text-black text-lg border-black border-2 rounded-full p-2 text-center w-[70%] h-[40px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
                  </div>
                  
                  <div className="flex flex-row items-center justify-evenly w-[80%] mb-2">
                    <label htmlFor="name" className="font-inkfree tracking-wider text-fg text-xl w-[30%] mr-2">
                      Dev Email
                    </label>

                    <input type="text"
                          id="appUrl"
                          name="appUrl"
                          value={newAppData.appUrl}
                          onChange={handleChange}
                          required
                          className="font-inkfree text-black text-lg border-black border-2 rounded-full p-2 text-center w-[70%] h-[40px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
                  </div>
                  
                  <div className="flex flex-row items-center justify-evenly w-[80%] mb-2">
                    <label htmlFor="name" className="font-inkfree tracking-wider text-fg text-xl w-[30%] mr-2">
                      Dev Repo URL
                    </label>

                    <input type="text"
                          id="appUrl"
                          name="appUrl"
                          value={newAppData.appUrl}
                          onChange={handleChange}
                          required
                          className="font-inkfree text-black text-lg border-black border-2 rounded-full p-2 text-center w-[70%] h-[40px] outline-none hover:outline-none focus:outline-none bg-gradient-to-br from-bg2 via-bd to-bg2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-evenly w-full flex-shrink-0 mt-5">
              <button type="button" onClick={handleCloseModal} className="font-inkfree font-bold text-black text-2xl w-[300px] h-[60px] border-black border-2 rounded-full outline-none focus:outline-none hover:outline-none">Cancel</button>
              <button type="submit" className="font-inkfree font-bold text-black text-2xl w-[300px] h-[60px] border-black border-2 rounded-full outline-none focus:outline-none hover:outline-none">Save</button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};
